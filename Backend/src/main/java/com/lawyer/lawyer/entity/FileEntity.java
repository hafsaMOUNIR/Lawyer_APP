package com.lawyer.lawyer.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity(name = "file")
@Data
@Table
public class FileEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String fileNumber;
    private String clientName;
    private  String clientPhone;
    private String  opponentName;
    private String tribName;
    private String jugName ;
    private Date date;
}
