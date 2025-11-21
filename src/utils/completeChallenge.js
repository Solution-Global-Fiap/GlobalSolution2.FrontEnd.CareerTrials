import { getUser, setUser } from "@/hooks/useAuth";

export function completeChallenge(challenge, score, totalQuestions) {
  const user = getUser();

  const alreadyCompleted = user.completedChallenges.includes(challenge.id);
  const gotMaxScore = score === totalQuestions;

  let gainedXP = 0;

  if (gotMaxScore && !alreadyCompleted) {
    gainedXP = challenge.xp;
    user.xp += gainedXP;
    user.completedChallenges.push(challenge.id);
  }

  user.level = Math.floor(user.xp / 500) + 1;

  setUser(user);

  return {
    alreadyCompleted,
    gainedXP,
    userXP: user.xp,
    userLevel: user.level,
    gotMaxScore,
  };
}

export function checkIsAlreadyCompleted(challenge) {
  return getUser().completedChallenges.includes(challenge.id);
}
