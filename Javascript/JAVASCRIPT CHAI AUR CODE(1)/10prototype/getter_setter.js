class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

get email()
{
    return `${this._email}lmdlfjdlmf`
}

set email(value)
{
    this._email =value
}

  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }
}

const hitesh = new user("apatil@gmail.com", "abhishek");

// console.log(hitesh.email);
console.log(hitesh.password);
console.log(hitesh.email);
