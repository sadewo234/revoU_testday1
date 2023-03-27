package com.example.tugas.user;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired private UserRepository repo;
    
    public List<User> listAll(){
        return (List<User>) repo.findAll();
    }

    public void save(User user) {
        repo.save(user);
    }

    public User get(Integer id) throws UserNotFoundExeception{
        Optional<User> result = repo.findById(id);
        if (result.isPresent()) {
            return result.get();
        }
       throw new UserNotFoundExeception(" tidak dapat mencari" + id);
    }

    public void delete( Integer id) throws UserNotFoundExeception{
        Long count = repo.countById(id);
        if(count == null || count == 0){
            throw new UserNotFoundExeception(" tidak dapat mencari" + id);
        }
        repo.deleteById(id);
    }
    

  


    
}
