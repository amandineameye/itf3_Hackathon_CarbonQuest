<?php

    class User {

        private int $id;
        private string $username;
        private string $email;
        private string $password;

        public function __construct($id, $username, $email, $password)
        {
            $this->id = $id;
            $this->username = $username;
            $this->email = $email;
            $this->password = $password;
        }
    }