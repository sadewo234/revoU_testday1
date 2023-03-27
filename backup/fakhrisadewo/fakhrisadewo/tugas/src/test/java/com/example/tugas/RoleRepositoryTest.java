package com.example.tugas;

import java.util.List;

import com.example.tugas.user.Role;
import com.example.tugas.user.RoleRepository;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase (replace= Replace.NONE)
@Rollback(false)
public class RoleRepositoryTest {
    @Autowired RoleRepository repo;

    @Test
    public void testCreateRoles(){
        Role admin = new Role("Admin");
        Role client = new Role("Client");
        Role master = new Role("Master");

        repo.saveAll(List.of(admin, client, master));

        List<Role> listRoles = repo.findAll();
        
        Assertions.assertThat(listRoles.size()).isEqualTo(3);
        
    }
    
}
