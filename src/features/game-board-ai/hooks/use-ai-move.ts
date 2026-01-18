import { useEffect, useState, useMemo } from 'react';
import { IAiMoveResponse, IPlayerMove } from '@/shared';
import { OpenAiSession } from '../api';
import { systemPrompt } from '../lib';
import { OPENAI_API_KEY } from '@env';

export function useAiMove(playerMove: IPlayerMove | null) {
  const [aiResponse, setAiResponse] = useState<IAiMoveResponse | null>(null);

  const openAiSession = useMemo(() => {
    return new OpenAiSession();
  }, []);

  useEffect(() => {
    openAiSession.initialize(OPENAI_API_KEY, systemPrompt);
  }, [openAiSession]);

  useEffect(() => {
    if (!playerMove) {
      return;
    }

    (async () => {
      const response = await openAiSession.sendMove(JSON.stringify(playerMove));
      setAiResponse(JSON.parse(response));
    })();
  }, [playerMove, openAiSession]);

  useEffect(() => {
    return () => {
      openAiSession.destroy();
    };
  }, [openAiSession]);

  return aiResponse;
}
