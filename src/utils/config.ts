// Centralized runtime configuration
// Public values should be prefixed with NEXT_PUBLIC_

// Always keep CAL_LINK as a slug like `workspace/30min`
export const CAL_LINK = (process.env.NEXT_PUBLIC_CAL_LINK || "smovers-logistics-hvtzwd/30min")
	// Strip full URLs if someone sets https://cal.com/workspace/30min
	.replace(/^https?:\/\/(www\.)?cal\.com\//i, "");

// Full URL for anchors and fallbacks
export const CAL_URL = `https://cal.com/${CAL_LINK}`;
