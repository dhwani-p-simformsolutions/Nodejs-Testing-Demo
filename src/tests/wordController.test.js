const wordController = require('../controller/word.controller'); // Update the path accordingly
const wordDao = require('../Operations/crud.dao'); // Update the path accordingly

jest.mock('../Operations/crud.dao', () => ({
  create: jest.fn(),
  findById: jest.fn(),
  deleteById: jest.fn(),
  updateWord: jest.fn(),
  findAll: jest.fn(),
}));

describe('Word Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test for addword function
  it('should add a word', async () => {
    const req = { body: { word: 'newWord' } };
    const res = { send: jest.fn() };

    wordDao.create.mockResolvedValue({ id: 1, word: 'newWord' });

    await wordController.addword(req, res);

    expect(res.send).toHaveBeenCalledWith({ id: 1, word: 'newWord' });
  });

  // Test for findwordById function
  it('should find a word by ID', async () => {
    const req = { params: { id: 1 } };
    const res = { send: jest.fn() };

    wordDao.findById.mockResolvedValue({ id: 1, word: 'foundWord' });

    await wordController.findwordById(req, res);

    expect(res.send).toHaveBeenCalledWith({ id: 1, word: 'foundWord' });
  });

  // Test for deleteById function
  it('should delete a word by ID', async () => {
    const req = { params: { id: 1 } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    wordDao.deleteById.mockResolvedValue({ id: 1, word: 'deletedWord' });

    await wordController.deleteById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'word deleted successfully', word: { id: 1, word: 'deletedWord' } });
  });

  // Test for updateword function
  it('should update a word by ID', async () => {
    const req = { body: { word: 'updatedWord' }, params: { id: 1 } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    wordDao.updateWord.mockResolvedValue({ id: 1, word: 'updatedWord' });

    await wordController.updateword(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'word updated successfully', word: { id: 1, word: 'updatedWord' } });
  });

  // Test for findwords function
  it('should find all words', async () => {
    const req = {};
    const res = { send: jest.fn() };

    wordDao.findAll.mockResolvedValue([{ id: 1, word: 'word1' }, { id: 2, word: 'word2' }]);

    await wordController.findwords(req, res);

    expect(res.send).toHaveBeenCalledWith([{ id: 1, word: 'word1' }, { id: 2, word: 'word2' }]);
  });
});
