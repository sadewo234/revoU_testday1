package com.example.tugas;

import java.util.Optional;

import com.example.tugas.user.User;
import com.example.tugas.user.UserRepository;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE )
@Rollback (false)
public class UserRepositoryTest {
    @Autowired private UserRepository repo;

    @Test
    public void testAddNew(){
        User user = new User ();
        user.setEmail("dewosadew@gmail.com");
        user.setPassword("1234466");
        user.setFirstName("sadewo");
        user.setLastName("fakhri");

        User savedUser = repo.save(user);
        Assertions.assertThat(savedUser).isNotNull();
        Assertions.assertThat(savedUser.getId()).isGreaterThan(0);
    }
     

    @Test
    public void testListAll(){
        Iterable<User>  users = repo.findAll();
        Assertions.assertThat(users).hasSizeGreaterThan(0);

        for(User user : users){
            System.out.println(user);
        }
        
    }

    @Test
    public void testUpdate(){
        Integer userId = 1;
        Optional <User> optionalUser = repo.findById(userId);
        User user = optionalUser.get();
        user.setPassword("hay122");
        repo.save(user);

        User updatedUser = repo.findById(userId).get();
        Assertions.assertThat(updatedUser.getPassword()).isEqualTo("hay122");
    }

    @Test
    public void testGet(){
        Integer userId = 2;
        Optional <User> optionalUser = repo.findById(userId);
        Assertions.assertThat(optionalUser).isPresent();
        System.out.println(optionalUser.get());
    }

    @Test
    public void testDelete(){
        Integer userId = 2;
        repo.deleteById(userId);
        Optional <User> optionalUser = repo.findById(userId);
        Assertions.assertThat(optionalUser).isNotPresent();
        
    }
}
