'use client';

import * as React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import PasswordSharpIcon from '@mui/icons-material/PasswordSharp';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const validationSchema = yup.object({
  email: yup.string().email("The mail address isn't valid.").required('Mail is required.'),

  password: yup
    .string()
    .min(10, 'Password must be at least 10 characters.')
    .required('Password is required'),
});

function SignInComponent() {
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    initialStatus: {
      ok: false,
      statusCode: '',
      statusText: '',
    },
    isInitialValid: false,
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (
      values,
      {
        setSubmitting,
        setStatus,
        // setErrors
      }
    ) => {
      try {
        const body = {
          email: values.email,
          password: values.password,
        };

        console.log('body in signin.txt: ', body);

        const signInResponse = await signIn('credentials', { ...body, redirect: false });

        console.log('signInResponse: ', signInResponse);

        if (!signInResponse || signInResponse.error !== null) {
          setStatus({
            ok: false,
            statusCode: 401,
            statusText: 'Either email or password is incorrect.',
          });

          setSnackBarOpen(true);
          setSubmitting(false);
        } else {
          // Login successful
          setStatus({
            ok: true,
            statusCode: 200,
            statusText: 'Login successful.',
          });

          setSnackBarOpen(true);
          router.push('/');
        }

        console.log('Login button clicked.');
      } catch (error) {
        console.log('Error: ', error);

        setStatus({
          ok: false,
          statusCode: 500,
          statusText: 'An error occurred. Please try again.',
        });

        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <div className="w-[95%] sm:w-[65%] md:w-[55%] lg:w-[50%] mx-auto">
        <div className="bg-transparent p-6 rounded-lg border-0">
          <form onSubmit={formik.handleSubmit} className="rounded-lg">
            <div className="grid gap-4 p-2">
              <h1 className={'text-center font-bold text-4xl uppercase'}>Login</h1>
              <h1 className={'text-center font-medium text-xl text-gray-500'}>
                Please enter your mail and password.
              </h1>
              <div className="p-1">
                <label htmlFor="email" className="block text-md font-medium ml-2">
                  Mail
                </label>
                <div className="mt-1 relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    className="block border-2 bg-transparent w-full py-3.5 pr-10 sm:text-sm border-primary-500 rounded-full focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your mail address here."
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <MailOutlineSharpIcon className={'text-primary-500'} />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="absolute left-0 -top-8 bg-red-500 text-white text-sm rounded-md px-4 py-2 shadow-lg animate-bounce">
                      {formik.errors.email}
                      <div className="absolute left-4 top-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-red-500"></div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="p-1">
                <label htmlFor="email" className="block text-md font-medium ml-2">
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    className="block border-2 bg-transparent w-full py-3.5 pr-10 sm:text-sm border-primary-500 rounded-full focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your password here."
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <PasswordSharpIcon className={'text-primary-500'} />
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="absolute left-0 -top-8 bg-red-500 text-white text-sm rounded-md px-4 py-2 shadow-lg animate-bounce">
                      {formik.errors.password}
                      <div className="absolute left-4 top-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-red-500"></div>
                    </div>
                  ) : null}
                </div>
                <div className="mt-4 p-1 mx-auto w-1/3">
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="w-full bg-transparent border-2 border-blue-600 font-bold py-4 px-3 rounded-3xl transition-colors duration-750 ease-in-out disabled:bg-gray-600 hover:bg-blue-600 hover:bg-opacity-50"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="p-2 rounded-3xl bg-gray-200 dark:bg-gray-800 w-4/5 mx-auto">
          <ul className="">
            <li>
              <form
                action={() => {
                  signIn('google', { callbackUrl: '/' }).then((r) => console.log('Google', r));
                }}
              >
                <button
                  type={'submit'}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-t-3xl transition-colors duration-500 ease-in-out hover:bg-gray-400 hover:dark:bg-gray-600"
                >
                  <GoogleIcon className={'text-primary-500'} fontSize={'large'} />
                  <span className="text-md font-medium">Google</span>
                </button>
              </form>
            </li>
            <li>
              <form
                action={async () => {
                  signIn('github', { callbackUrl: '/' }).then((r) => {
                    console.log(r?.ok);
                  });
                }}
              >
                <button
                  type={'submit'}
                  className="w-full flex items-center space-x-3 px-4 py-3 transition-colors duration-500 ease-in-out hover:bg-gray-400 hover:dark:bg-gray-600"
                >
                  <GitHubIcon className={'text-primary-500'} fontSize={'large'} />
                  <span className="text-md font-medium">GitHub</span>
                </button>
              </form>
            </li>
            {/*<li>*/}
            {/*    <button*/}
            {/*        disabled*/}
            {/*        onClick={() => signIn("linkedin", {callbackUrl: "/"})}*/}
            {/*        className="w-full flex items-center space-x-3 px-4 py-3 rounded-b-3xl transition-colors duration-500 ease-in-out hover:bg-gray-400 hover:dark:bg-gray-600"*/}
            {/*    >*/}
            {/*        <LinkedInIcon className={"text-primary-500"} fontSize={'large'}/>*/}
            {/*        <span className="text-md font-medium">LinkedIn</span>*/}
            {/*    </button>*/}
            {/*</li>*/}
          </ul>
        </div>
        {snackBarOpen && (
          <div
            className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-${
              formik.status.ok ? 'green' : 'red'
            }-500 text-white px-4 py-2 rounded-lg transition-opacity duration-500`}
          >
            <strong>{formik.status.statusCode}</strong> {formik.status.statusText}
            <button className="ml-4" onClick={() => setSnackBarOpen(false)}>
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default SignInComponent;
