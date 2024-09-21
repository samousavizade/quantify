import Link from '@/components/Link';
import SectionContainer from '@/components/SectionContainer';

export default function FourZeroOne() {
  return (
    <SectionContainer>
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          401
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          We are sorry but we are not able to authenticate you. You have to subscribe to access
          these pages. If you are already subscribed, check you gave proper credential in the login
          step.
        </p>
        <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
        <Link href="/">Back to homepage</Link>
      </div>
    </SectionContainer>
  );
}
