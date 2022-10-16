
public class Solution {

    public int countTime(String time) {
        String hours = time.substring(0, 2);
        String minutes = time.substring(3);

        int numberOfValidClockTimes = 1;

        if (hours.equals("??")) {
            numberOfValidClockTimes = 24;
        } else {
            numberOfValidClockTimes = (hours.charAt(0) == '?') ? ((hours.charAt(1) < '4') ? 3 : 2) : 1;
            numberOfValidClockTimes *= (hours.charAt(1) == '?') ? ((hours.charAt(0) < '2') ? 10 : 4) : 1;
        }

        if (minutes.equals("??")) {
            numberOfValidClockTimes *= 60;
        } else {
            numberOfValidClockTimes *= (minutes.charAt(0) == '?') ? 6 : 1;
            numberOfValidClockTimes *= (minutes.charAt(1) == '?') ? 10 : 1;
        }

        return numberOfValidClockTimes;
    }
}
