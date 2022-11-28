package com.lawyer.lawyer.repository;

import com.lawyer.lawyer.entity.FileEntity;
import com.lawyer.lawyer.model.File;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends JpaRepository<FileEntity, Long> {
}
