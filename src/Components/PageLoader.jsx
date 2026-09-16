import AppLayout from "./AppLayout";
import { Oval } from "react-loader-spinner";

export default function PageLoader() {
  return (
    <AppLayout>
      <section
        className="flex min-h-[100svh] flex-col items-center justify-center gap-5 bg-primary-deep px-4"
        aria-label="Loading page"
        aria-live="polite"
      >
        <Oval
          height={48}
          width={48}
          color="var(--color-background)"
          secondaryColor="var(--color-primary)"
          strokeWidth={4}
          strokeWidthSecondary={4}
          ariaLabel="loading"
        />

        <p className="text-center text-sm font-medium text-background">
          Loading...
        </p>
      </section>
    </AppLayout>
  );
}