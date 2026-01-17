import { useEffect, useState } from 'react';
import { IAiMoveResponse, IPlayerMove } from '@/shared';
import { OpenAiSession } from '../api';
import { systemPrompt } from '../lib';
import { OPENAI_API_KEY } from '@env';

const openAiSession = new OpenAiSession();

export function useAiMove(playerMove: IPlayerMove | null) {
  const [aiResponse, setAiResponse] = useState<IAiMoveResponse | null>(null);
  useEffect(() => {
    openAiSession.initialize(OPENAI_API_KEY, systemPrompt);
  }, []);

  useEffect(() => {
    if (playerMove) {
      openAiSession.sendMove(JSON.stringify(playerMove)).then((response) => {
        setAiResponse(JSON.parse(response));
        console.log(JSON.parse(response));
      });
    }
  }, [playerMove]);

  return aiResponse;
}
