<?php

class DB extends PDO
{
    public function __construct()
    {
        try {
            parent::__construct("sqlite:../lib/DB/mySqlite.db");
            $this->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

}