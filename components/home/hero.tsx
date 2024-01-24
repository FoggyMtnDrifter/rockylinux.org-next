import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="relative isolate pt-14">
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-display">
              Enterprise Linux, the community way.
            </h1>
            <p className="mt-6 text-lg leading-8">
              Rocky Linux is an open-source enterprise operating system designed
              to be 100% bug-for-bug compatible with Red Hat Enterprise Linux®.
              It is under intensive development by the community.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/download">
                <Button className="p-5 font-bold">Download</Button>
              </a>
              <a href="#">
                <Button variant="secondary" className="p-5">
                  Migrate
                </Button>
              </a>
            </div>
          </div>
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-slate-900/5 dark:bg-slate-100/5 p-2 ring-1 ring-inset ring-slate-900/10 dark:ring-slate-100/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="/home/hero-image.png"
                alt="Rocky Linux Screenshot"
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-slate-900/10 dark:ring-slate-100/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
