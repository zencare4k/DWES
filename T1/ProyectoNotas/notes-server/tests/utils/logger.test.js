const logger = require('../../src/utils/logger');

describe('Logger Utility', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should log info messages', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation();
    logger.info('Test info message');
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('INFO: Test info message'));
    logSpy.mockRestore();
  });

  it('should log error messages', () => {
    const logSpy = jest.spyOn(console, 'error').mockImplementation();
    logger.error('Test error message');
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('ERROR: Test error message'));
    logSpy.mockRestore();
  });

  it('should log warning messages', () => {
    const logSpy = jest.spyOn(console, 'warn').mockImplementation();
    logger.warn('Test warning message');
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('WARN: Test warning message'));
    logSpy.mockRestore();
  });
});