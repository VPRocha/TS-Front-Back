interface userCreateInterface {
  name: string;
  email: string;
  password: string;
}

interface errorValidateCreateUserInterface {
  location: string;
  msg: string;
  path: string;
  type: string;
  value: string;
}

export { userCreateInterface, errorValidateCreateUserInterface }