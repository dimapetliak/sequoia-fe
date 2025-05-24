"use client";

import { Button } from "@/components/UI/molecules/Button";

export default function Error() {
  return (
    <>
      <h1>Something went wrong!</h1>
      <Button
        label="Go to Home page"
        variant={"filled"}
        onClick={() => (window.location.href = "/")}
      />
    </>
  );
}
