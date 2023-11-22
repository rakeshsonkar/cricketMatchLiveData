package com.crickinformater.backend.service;

import java.util.List;

import com.crickinformater.backend.entity.Match;

public interface CricketService {
	List<Match> getLiveMatchScores();

	List<List<String>> getCWC2023PointTable();

	List<Match> getAllMatches();
}
