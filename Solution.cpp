
#include <string>
using namespace std;

class Solution {
    
public:
    int countTime(string time) {
        string hours = time.substr(0, 2);
        string minutes = time.substr(3);

        int numberOfValidClockTimes = 1;

        if (hours == "??") {
            numberOfValidClockTimes = 24;
        } else {
            numberOfValidClockTimes = (hours[0] == '?') ? ((hours[1] < '4') ? 3 : 2) : 1;
            numberOfValidClockTimes *= (hours[1] == '?') ? ((hours[0] < '2') ? 10 : 4) : 1;
        }

        if (minutes == "??") {
            numberOfValidClockTimes *= 60;
        } else {
            numberOfValidClockTimes *= (minutes[0] == '?') ? 6 : 1;
            numberOfValidClockTimes *= (minutes[1] == '?') ? 10 : 1;
        }

        return numberOfValidClockTimes;
    }
};
