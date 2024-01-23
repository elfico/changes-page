import { serve } from "inngest/next";
import { handleSubscriptionChange } from "../../inngest/billing/handle-subscription";
import { reportUsageForStripeInvoice } from "../../inngest/billing/report-pages-usage-invoice";
import { sendConfirmEmailNotification } from "../../inngest/email/send-confirm-email-notification";
import { deleteImagesJob } from "../../inngest/jobs/delete-images";
import { sendPostNotification } from "./../../inngest/email/send-post-notification";

// Create an API that hosts zero functions.
export default serve("changes-page", [
  // Billing
  reportUsageForStripeInvoice,
  handleSubscriptionChange,
  // Emails
  sendConfirmEmailNotification,
  sendPostNotification,
  // Background Jobs
  deleteImagesJob,
]);
