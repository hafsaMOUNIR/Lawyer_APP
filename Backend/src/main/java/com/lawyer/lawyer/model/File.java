package com.lawyer.lawyer.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class File {


    private Long id;
    private String fileNumber;
    private String clientName;
    private String clientPhone;
    private String  opponentName;
    private String tribName;
    private String jugName ;
    private Date date;




}
