import { MixIcon, RocketIcon, PaperPlaneIcon } from "@radix-ui/react-icons";

const features = [
  {
    name: "Production Ready",
    description:
      "Rocky Linux is enterprise-ready, providing solid stability with regular updates and a 10-year support lifecycle, all at no cost.",
    icon: MixIcon,
  },
  {
    name: "Community Supported",
    description:
      "The community, sponsors, and partners have invested with long-term commitments to ensure the project stays with the community.",
    icon: RocketIcon,
  },
  {
    name: "Easy Migration",
    description:
      "Migrate from other Enterprise Linux distributions without sweating it. We provide an easy-to-use migration script, free of charge.",
    icon: PaperPlaneIcon,
  },
];

export default function FeatureOne() {
  return (
    <div className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary font-display uppercase">
            STABLE, PRODUCTION READY LINUX
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl font-display">
            Rock solid, no matter the use-case.
          </p>
          <p className="mt-6 text-lg leading-8">
            Rocky Linux rebuilds sources directly from RHEL®, so you can bet
            your best dollar that you'll have a super stable experience, no
            matter the use-case.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-md font-bold leading-7 font-display">
                  <feature.icon
                    className="h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
