# Security Requirements

- Never commit API keys, payment secrets, access tokens, passwords, or real customer data.
- Keep `.env` files ignored; commit only safe variable names in `.env.example`.
- Keep payment secrets and privileged operations server-side.
- Verify payment signatures and webhook authenticity server-side.
- Validate and normalize user-controlled inputs.
- Use secure session and cookie settings if authentication is introduced.
- Apply least privilege to external services and credentials.
- Avoid logging credentials, tokens, or unnecessary personal data.
- Confirm authorization before using third-party brand assets or product media.
- Review dependency advisories before production.
- Document security-sensitive decisions and tests.
