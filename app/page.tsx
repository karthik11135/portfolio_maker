import Image from 'next/image';
import Preview from '@/components/Preview/Preview';
import Form from '@/components/Form/Form';

export default function Home() {
  return (
    <div className="border">
      <div className=" grid gap-2 grid-cols-12">
        <div className="col-span-8 w-4/6 mx-auto py-10">
          <Form />
        </div>
        <div className="col-span-4  overflow-y-hidden fixed right-0 w-4/12 min-h-screen border">
          <Preview />
        </div>
      </div>
    </div>
  );
}
