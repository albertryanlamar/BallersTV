import fs from 'fs';
import path from 'path';

const logDir = path.join(process.cwd(), 'logs');

// Create logs folder
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
  }

  // YYYYMMDD
  const now = new Date();
  const date = [ now.getFullYear(),String(now.getMonth() + 1).padStart(2, '0'),
        String(now.getDate()).padStart(2, '0')
        ].join('');

  // Find existing logs for today
    const existingLogs = fs.readdirSync(logDir).filter(file =>file.startsWith(`loggers_${date}_`) &&file.endsWith('.log'));
 // Determine next number
    let nextNumber = 1;

    for (const file of existingLogs) {
        const match = file.match(new RegExp(`^loggers_${date}_(\\d+)\\.log$`));
        if (match) {
            const number = Number(match[1]);
            if (number >= nextNumber) {
                 nextNumber = number + 1;
            }
        }
    }

                                                    // 001, 002, 003...
                                                    const runNumber = String(nextNumber).padStart(3, '0');

                                                    const fileName = `loggers_${date}_${runNumber}.log`;
                                                    const logFile = path.join(logDir, fileName);
    // Write message to console + file
    function writeLog(status: 'PASS' | 'FAIL' | 'INFO',message: string) {
        const timestamp = new Date().toISOString();
        const logMessage =`${timestamp} [${status}] ${message}\n`;
        // Console
        console.log(logMessage.trim());
       // File
        fs.appendFileSync(logFile, logMessage);
    }
// Public logger functions
export const logger = {
    info(message: string) {
        writeLog('INFO', message);
    },
    pass(testName: string) {
        writeLog('PASS', testName);
    },
    fail(testName: string, error?: string) {
        writeLog('FAIL',error ? `${testName}\nError: ${error}`: testName);
    },
    getFilePath() {
        return logFile;
    },
    getFileName() {
        return fileName;
    }
};
// Start of test execution
logger.info(`Test execution started`);
logger.info(`Log file: ${fileName}`);