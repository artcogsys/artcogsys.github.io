import { Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import LayoutPostWrapper from "../components/layoutPostWrapper";

const ContactPage = ({ children }) => {
  const theme = useTheme();

  return (
    <LayoutPostWrapper opaque  pageIdx={7} title="Contact">
      <Grid
        container
        spacing={4}
        sx={{
          padding: { xs: "2rem", md: "4rem" },
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/general/marcel.png"
              alt="Marcel van Gerven"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
                borderRadius: "16px",
                boxShadow: theme.shadows[10],
              }}
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Stack spacing={3}>
              <Typography variant="h4" component="strong" sx={{ fontWeight: 700 }}>
                Marcel van Gerven
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                Email: <em>marcel.vangerven@donders.ru.nl</em>
              </Typography>

              <Typography variant="h5" component="strong" sx={{ fontWeight: 700 }}>
                Visiting Address
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                Thomas van Aquinostraat 4<br />
                6525 GD NIJMEGEN
              </Typography>

              <Typography variant="h5" component="strong" sx={{ fontWeight: 700 }}>
                Postal Address
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                Postbus 9104<br />
                6500 HE NIJMEGEN
              </Typography>
            </Stack>
          </motion.div>
        </Grid>
      </Grid>
      {children}
    </LayoutPostWrapper>
  );
};

export default ContactPage;