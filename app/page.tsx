import Image from 'next/image';
import Preview from '@/components/Preview/Preview';
import Form from '@/components/Form/Form';
import { Modal } from '@/components/common/Modal';

export default function Home() {
  return (
    <>
      <div className="">
        <div className=" grid md:px-2 px-2 gap-2 grid-cols-12">
          <div className="col-span-8 lg:w-4/6 md:5/6 mx-auto py-10">
            <Form />
          </div>
          <div className="col-span-4 hidden md:block overflow-y-hidden fixed right-0 w-4/12 min-h-screen border">
            <Preview />
          </div>
        </div>
      </div>
    </>
  );
}
