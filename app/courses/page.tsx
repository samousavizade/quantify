import MainLayout from '@/layouts/MainLayout';
import CoursesListLayout from '@/layouts/MDX/CoursesListLayout';

export default async function CoursesList() {
  return (
    <MainLayout>
      <CoursesListLayout />
    </MainLayout>
  );
}
