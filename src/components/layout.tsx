import type { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex h-full h-screen justify-center">
      <div className=" h-full w-full overflow-y-scroll border-x border-slate-200 md:max-w-2xl">
        {props.children}
      </div>
    </main>
  );
};
