export const formatResumeDate = (dateString: string | undefined): string => {
  if (!dateString) return "Present";

  // Guard: If the user just typed "2024", return it as is
  if (!dateString.includes("-")) return dateString;

  // Split "2023-02" into [2023, 2]
  const [year, month] = dateString.split("-").map(Number);

  const date = new Date(year, month - 1);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
};
