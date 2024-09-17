class User {
    name: string;
    email: string;
    password: string;
    role: number;
    constructor(name: string, email: string, password: string, role: number) {
        this.name = name
        this.email = email
        this.password = password
        this.role = role
    }
}
export default User