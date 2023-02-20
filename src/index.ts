export default function isCodespace(): boolean {
  return "CODESPACES" in process.env;
}
