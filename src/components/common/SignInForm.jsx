function SignInForm (){
    return (
    <div>
        <h2>Log in / Sign up</h2>
        <div>
            <label htmlFor="email">email</label>
            <input type="email" />
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input type="password" />
        </div>
        <div>
            <button>Cancel</button>
            <button>Log in</button>
        </div>
    </div>
    );
}

export default  SignInForm;