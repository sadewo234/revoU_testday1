package com.example.begeng.user;

import java.util.function.IntPredicate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   
    private Integer id;
   
    @Column(nullable = false, length = 45)
    private Integer phonenumber;
   
    @Column(nullable = false, length = 45 , unique = true, name = "full_name")
    private String fullname;
   
    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(Integer phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBusinessname() {
        return businessname;
    }

    public void setBusinessname(String businessname) {
        this.businessname = businessname;
    }

    @Column(nullable = false, length = 45)
    private String email;
   
    @Column(nullable = false, length = 45 , name = "businessname")
    private String businessname;

    public void setPhonenumber(String string) {
    }

    public IntPredicate getId() {
        return null;
    }

}
