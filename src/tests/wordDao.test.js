
const wordDao = require('../Operations/crud.dao'); // Update the path accordingly
const word = require('../models/word.model');

jest.mock('../models/word.model', () => ({
  findAll: jest.fn(),
  findByPk: jest.fn(),
  destroy: jest.fn(),
  update: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
}));

describe('Word DAO', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test for findAll function
  it('should return all words', async () => {
    word.findAll.mockResolvedValue(['word1', 'word2']);

    const result = await wordDao.findAll();

    expect(result).toEqual(['word1', 'word2']);
    expect(word.findAll).toHaveBeenCalled();
  });

  // Test for findById function
  it('should return a word by ID', async () => {
    const fakeId = 123;
    word.findByPk.mockResolvedValue({ id: fakeId, word: 'fakeWord' });

    const result = await wordDao.findById(fakeId);

    expect(result).toEqual({ id: fakeId, word: 'fakeWord' });
    expect(word.findByPk).toHaveBeenCalledWith(fakeId);
  });

  // Test for deleteById function
  it('should delete a word by ID', async () => {
    const fakeId = 456;
    word.destroy.mockResolvedValue(1); // Indicating one record was deleted

    const result = await wordDao.deleteById(fakeId);

    expect(result).toEqual(1);
    expect(word.destroy).toHaveBeenCalledWith({ where: { id: fakeId } });
  });

  // Test for create function
  it('should successfully create a new word', async () => {
    const fakeWord = { word: 'newWord' };
    const fakeCreateWord = { id: 789, word: 'newWord' }; // Simulated created word

    word.create.mockResolvedValue(fakeCreateWord);

    const result = await wordDao.create(fakeWord);

    expect(result).toEqual(fakeCreateWord);

    expect(word.create).toHaveBeenCalledWith(fakeWord);
  });

  // Test for updateWord function
  it('should update a word by ID', async () => {
    const fakeId = 101;
    const fakeUpdatedWord = { id: fakeId, word: 'updatedWord' };
    word.update.mockResolvedValue([1]); // Indicating one record was updated

    const result = await wordDao.updateWord(fakeUpdatedWord, fakeId);

    expect(result).toEqual([1]);
    expect(word.update).toHaveBeenCalledWith(fakeUpdatedWord, { where: { id: fakeId } });
  });
});

