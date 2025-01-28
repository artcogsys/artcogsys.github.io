import React from "react";
import { Typography, Link, Stack, Box } from "@mui/material";
import LayoutPostWrapper from "../components/layoutPostWrapper";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion } from "framer-motion";

const EducationPage: React.FC = () => {
  return (
    <LayoutPostWrapper opaque pageIdx={5} title="Education">
      <Box sx={{ maxWidth: 1200, margin: "0 auto", padding: { xs: 2, md: 0 } }}>
        <Stack spacing={3}>
          {/* Animated Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h5" component="p" sx={{ fontWeight: 500, color: "text.secondary" }}>
              The members of the group are involved in teaching courses for the (under)graduate Artificial Intelligence program at Radboud University. For a full overview of the programs, check out the:
            </Typography>
          </motion.div>

          {/* Links with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Stack spacing={2}>
              <Link
                href="https://www.ru.nl/en/education/masters/artificial-intelligence"
                target="_blank"
                rel="noreferrer"
                sx={{
                  color: "primary.main",
                  fontWeight: 500,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Masters AI Program Overview
                <LaunchIcon sx={{ fontSize: 14, verticalAlign: "middle", ml: 0.5 }} />
              </Link>

              <Link
                href="https://www.ru.nl/en/education/masters/artificial-intelligence"
                target="_blank"
                rel="noreferrer"
                sx={{
                  color: "primary.main",
                  fontWeight: 500,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Bachelor AI Program Overview
                <LaunchIcon sx={{ fontSize: 14, verticalAlign: "middle", ml: 0.5 }} />
              </Link>
            </Stack>
          </motion.div>

          {/* Animated Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Typography variant="h5" component="p" sx={{ fontWeight: 500, color: "text.secondary" }}>
              Students are welcome to join us on cutting-edge AI internships at the intersection between machine learning and natural computing if space permits. We occasionally have paid research assistantships available for internal students either via our regular research program or via the ELLIS excellence program.
            </Typography>
          </motion.div>
        </Stack>
      </Box>
    </LayoutPostWrapper>
  );
};

export default EducationPage;