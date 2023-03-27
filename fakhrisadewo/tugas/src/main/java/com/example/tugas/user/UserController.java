package com.example.tugas.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RestController
public class UserController {
    @Autowired private UserService service;

    @GetMapping ("/users")
    public String showUserList(Model model){
       List<User> listUsers = service.listAll();
        System.out.println("jumlah user" + listUsers.size() );
       model.addAttribute("listUsers", listUsers);
        return "user";
    }
    @GetMapping("/users/new")
    public String  showNewForm(Model model){
        model.addAttribute("user", new User());
        model.addAttribute("pageTitle", "Add New User");
        return "user_form";
    }
    @PostMapping("/users/save")
    public String saveUser (User user, RedirectAttributes ra){
        service.save(user);
        ra.addFlashAttribute("message", "berhasil!");
        return "redirect:/users";
    }

    @GetMapping("/users/delete/{id}")
    public String deleteUser(@PathVariable("id") Integer id, RedirectAttributes ra) {
        try {
            service.delete(id);
            ra.addFlashAttribute("message", "The User ID" + id + "berhasil di delete");

            
        }
        catch (UserNotFoundExeception e) {
            ra.addFlashAttribute("message", e.getMessage());
            
        }
        return "redirect:/users";
        
    } 


  @GetMapping("/users/edit/{id}")
    public String showEditForm(@PathVariable("id") Integer id, Model model, RedirectAttributes ra) {
        try {
            User user = service.get(id);
            model.addAttribute("user", user);
            model.addAttribute("pageTitle", "Edit User (ID:" + id +")" );


            return "user_form";
        }
        catch (UserNotFoundExeception e) {
            ra.addFlashAttribute("message", e.getMessage());
            return "redirect:/users";
        }
       
        
    }

  

    
}
   
