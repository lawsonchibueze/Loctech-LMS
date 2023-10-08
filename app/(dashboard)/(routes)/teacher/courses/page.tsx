import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
  return (
    <div className="p-6">
      <Link href="/teacher/create">
        <Button className="bg-black text-white rounded-xl hover:bg-rose-800">
          New Course
        </Button>
      </Link>
    </div>
  );
};

export default CoursesPage;
