import { NavigationScreen, useNavigationContext } from '@/shared';
import { SinglePlayerPage, AiPage } from '@/pages';

export function AppRouting() {
  const { screen } = useNavigationContext();

  switch (screen) {
    case NavigationScreen.SINGLE_PLAYER:
      return <SinglePlayerPage />;
    case NavigationScreen.AI:
      return <AiPage />;
    default:
      return <SinglePlayerPage />;
  }
}
