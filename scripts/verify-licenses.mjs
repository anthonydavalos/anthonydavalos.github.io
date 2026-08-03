import { readFile } from "node:fs/promises";
import process from "node:process";
import { URL } from "node:url";

const requiredPackages = [
  "bootstrap",
  "bootstrap-icons",
  "aos",
  "glightbox",
  "swiper",
  "@srexi/purecounterjs",
  "imagesloaded",
  "isotope-layout",
];

const requiredNotices = [
  "Bootstrap",
  "Bootstrap Icons",
  "AOS",
  "GLightbox",
  "Swiper",
  "PureCounter",
  "imagesLoaded",
  "Isotope",
  "Open Sans",
  "Raleway",
];

const [packageText, licenseText, noticesText] = await Promise.all([
  readFile(new URL("../package.json", import.meta.url), "utf8"),
  readFile(new URL("../LICENSE", import.meta.url), "utf8"),
  readFile(new URL("../THIRD_PARTY_NOTICES.md", import.meta.url), "utf8"),
]);

const packageManifest = JSON.parse(packageText);
const dependencies = packageManifest.dependencies ?? {};
const missingPackages = requiredPackages.filter((name) => !dependencies[name]);
const missingNotices = requiredNotices.filter(
  (name) => !noticesText.includes(name),
);

if (packageManifest.license !== "GPL-3.0") {
  throw new Error('package.json must declare the "GPL-3.0" license.');
}

if (!licenseText.startsWith("                    GNU GENERAL PUBLIC LICENSE")) {
  throw new Error("LICENSE must contain the GNU GPL v3 text.");
}

if (!noticesText.includes("GPL-3.0") || !noticesText.includes("Isotope")) {
  throw new Error(
    "Third-party notices must record the GPL-3.0 Isotope dependency.",
  );
}

if (missingPackages.length > 0) {
  throw new Error(
    `Missing required dependencies: ${missingPackages.join(", ")}`,
  );
}

if (missingNotices.length > 0) {
  throw new Error(`Missing third-party notices: ${missingNotices.join(", ")}`);
}

process.stdout.write("License and third-party notice checks passed.\n");
