import { View, StyleSheet } from 'react-native';
import { ChessPieceTeam } from '@/shared';
import { Timer } from './components';

interface GameInfoProps {
  children: React.ReactNode;
}

export function GameInfo({ children }: GameInfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <Timer currentTeam={ChessPieceTeam.BLACK} />
      </View>
      {children}
      <View style={styles.lowerSection}>
        <Timer currentTeam={ChessPieceTeam.WHITE} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperSection: {
    position: 'absolute',
    top: 160,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '10%',
  },
  lowerSection: {
    position: 'absolute',
    bottom: 160,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '10%',
  },
});
