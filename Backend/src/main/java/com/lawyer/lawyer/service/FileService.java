package com.lawyer.lawyer.service;

import com.lawyer.lawyer.entity.FileEntity;
import com.lawyer.lawyer.model.File;
import com.lawyer.lawyer.repository.FileRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FileService {
    @Autowired
    private FileRepository fileRepository;

    public FileService(FileRepository fileRepository) {
        this.fileRepository = fileRepository;
    }

    public File createFile(File file){
        FileEntity fileEntity = new FileEntity();
        BeanUtils.copyProperties(file, fileEntity);
        fileRepository.save(fileEntity);
        return file;
    }

    public List<File> getAllFile() {
        List<FileEntity> fileEntities = fileRepository.findAll();
        List<File> files = fileEntities.stream().map(fil -> new File(fil.getId(),
                fil.getFileNumber(),
                fil.getClientName(),
                fil.getClientPhone(),
                fil.getOpponentName(),
                fil.getTribName(),
                fil.getJugName(),
                fil.getDate())).collect(Collectors.toList());
        return files;
    }
}
