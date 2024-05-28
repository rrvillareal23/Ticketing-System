import React from "react";
import { Button } from "@radix-ui/themes";
import { themePropDefs } from "@radix-ui/themes/props";
import Link from "next/link";

const IssuesPage = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue </Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
