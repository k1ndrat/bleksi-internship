import Box from "@mui/material/Box";
// import Link from "@mui/material/Link";

// import { RouterLink } from 'src/routes/components';

import { BreadcrumbsLinkProps } from "./types";
import Link from "next/link";

// ----------------------------------------------------------------------

type Props = {
  link: BreadcrumbsLinkProps;
  activeLast?: boolean;
  disabled: boolean;
};

export default function BreadcrumbsLink({ link, activeLast, disabled }: Props) {
  const styles = {
    typography: "body2",
    color: "text.disabled",
    alignItems: "center",
    display: "inline-flex",
    transition: "all 0.3s",
    "&:hover": {
      color: "text.primary",
    },
    ...(disabled &&
      !activeLast && {
        cursor: "default",
        pointerEvents: "none",
        color: "text.primary",
      }),
  };

  const renderContent = (
    <>
      {link.icon && (
        <Box
          component="span"
          sx={{
            mr: 1,
            display: "inherit",
            "& svg": { width: 20, height: 20 },
          }}
        >
          {link.icon}
        </Box>
      )}

      {link.name}
    </>
  );

  if (link.href) {
    return (
      <Box sx={styles}>
        <Link href={link.href} className="uppercase">
          {renderContent}
        </Link>
      </Box>
    );
  }

  return <Box sx={styles}>{renderContent}</Box>;
}
