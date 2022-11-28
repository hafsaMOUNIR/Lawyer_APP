package com.lawyer.lawyer.controller;

import com.lawyer.lawyer.model.File;
import com.lawyer.lawyer.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class FileController {

    @Autowired
    private FileService fileService;

    public FileController(FileService fileService){
        this.fileService = fileService;
    }

    @PostMapping("/files")
    public File createFile(@RequestBody File file) {
       return fileService.createFile(file);
    }

    @GetMapping("/files")
    public List<File> getAllFile() {
        return fileService.getAllFile();
    }

}
