import React from 'react';

import './subscribe.css';
const Welcome = () => {
    const submit = event => {
        event.preventDefault();
        const email = event.target[0].value;
        const url =
            'https://vkz9p19s67.execute-api.eu-west-1.amazonaws.com/prod';
        console.log(email);

        fetch(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                email,
                firstName: '',
                lastName: '',
                listId: 'c5227eae-e23a-11e8-a3c9-06b79b628af2'
            })
        })
            .then(res => res.json())
            .then(x => console.log(x));
    };

    return (
        <section>
            <div className="wrapper">
                <h1>Subscribe</h1>

                <form onSubmit={submit}>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email@hello.com"
                        required
                    />
                    <input type="submit" value=">" />
                </form>
            </div>
        </section>
    );
};

export default Welcome;
