'use client';

import Image from 'next/image';

const Middle = () => (
  <div className="grad-background d-flex align-items-center justify-content-center">
    <div className="text-center text-white px-3">
      <Image
        src="/murphyslogowhite.png"
        alt="Murphy's Logo"
        width={300}
        height={150}
        className="mb-4"
      />
      <h1>Now accepting reservations for St Patrick&apos;s Day</h1>
      <h2>Please call 808-531-0422 for reservations</h2>
      <h3>St Patrick&apos;s Day To-Go Orders can be ordered on our website menu.</h3>
    </div>
  </div>
);

export default Middle;
