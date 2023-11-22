package com.crickinformater.backend.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "crick_match")
@AllArgsConstructor
@NoArgsConstructor
public class Match {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int matchId;

    private String teamHeading;
    private String matchNumberVenue;

    private String battingTeam;

    private String battingTeamScore;

    private String bowlTeam;
    private String bowlTeamScore;

    private String liveText;

    private String matchLink;

    private String textComplete;

    @Enumerated
    private MatchStatus status;


    private Date date=new Date();

    public void setMatchStatus() {
        if (this.textComplete.trim().isBlank()) {
            this.status=MatchStatus.LIVE;
        } else {
            this.status = MatchStatus.COMPLETED;
        }
    }
}
