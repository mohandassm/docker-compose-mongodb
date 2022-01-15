db.createUser(
        {
            user: "TestUser",
            pwd: "Test23USR",
            roles: [
                {
                    role: "readWrite",
                    db: "TestDB"
                }
            ]
        }
);