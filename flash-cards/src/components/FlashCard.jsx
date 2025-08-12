import React, { useState } from 'react'
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5'

function FlashCard({sharedData, setSharedData}) {

  const [isShown, setIsShown] = useState(false);
  let [index, addIndex] = useState(0);


  const infos = [
    {
        question: "Who is Younes Moukhlij?",
        answer: "Software Engineering Student and Phd Researcher."
      },
    {
      question: "What university does Younes attend?",
      answer: "He studies at a university specializing in software engineering."
    },
    {
      question: "What is Younes's main field of research?",
      answer: "His main field is software engineering and PhD-level research."
    },
    {
      question: "What programming languages does Younes use? 4",
      answer: "He uses JavaScript, Python, and C/C++."
    },
    {
      question: "What hobbies does Younes enjoy? 5",
      answer: "He enjoys coding, reading, and playing chess."
    },
    {
      question: "What is Younes's career goal? 6",
      answer: "To become a leading software engineer and researcher."
    },
    {
      question: "Does Younes contribute to open source? 7",
      answer: "Yes, he actively contributes to open source projects."
    },
    {
      question: "What is Younes's favorite technology? 8",
      answer: "He is passionate about artificial intelligence."
    },
    {
      question: "Has Younes published any research papers?9",
      answer: "Yes, he has published papers in software engineering."
    },
    {
      question: "What languages does Younes speak?10",
      answer: "He speaks English, French, and Arabic."
    }
  ]

  const operations = () =>
  {
    setIsShown(!isShown);
  }

  const next = () =>
  {
    addIndex(index + 1);
    if (index === 9)
      addIndex(0);
    setSharedData(index)

    setIsShown(false)
  }

  const previous = () =>
    {
      if (index < 1)
      {
        index = 0;
      }
      else
      {
        addIndex(index - 1);
      }
      setSharedData(index)
  }

  React.useEffect(() => {
    setSharedData(index);
  }, [index]);



  return (
    <div className=" ml-4 mr-4  h-[100%] w-full rounded-xl flex align-items justify-center" >
      <div className='shadow-xl relative border-2 border-gray-400 gap-2 w-full mx-4 px-2 py-2  rounded-xl flex justify-center items-center flex-col'>
        <div className={`h-[471px] w-[549px]  bg-gray-100 rounded-2xl  top-2 right-4 left-2  bottom-4 flex items-center justify-center  absolute inset-4 transition-all duration-500 ${isShown ? 'rotate-0 opacity-0' : 'rotate-360 opacity-100'} `}>
          <p className='p-4 text-2xl font-bold font-sans w-full text-center'>{infos[index].question}</p>
        </div>
        <div className=' h-[90%] bg-gray-100 rounded-2xl w-full  flex items-center justify-center'>
          <p className='p-4 text-2xl font-bold font-sans w-full text-justify'>{infos[index].answer}</p>
        </div>
        <div className='h-[10%] bg-gray-100 rounded-2xl w-full  px-6 flex items-center justify-between py-1'>
          <button onClick={previous} className='border-none cursor-pointer w-[20%] h-[90%] hover:bg-gray-500 hover:rounded-xl hover:text-white flex items-center justify-center gap-2'>
            <IoArrowBackOutline size={15} />
            Previous
          </button>
          <button onClick={operations} className='border-none cursor-pointer w-[30%] h-[90%] hover:bg-gray-500 hover:rounded-xl hover:text-white'>
            {!isShown ? 'Show Answer' : 'Hide Answer'}

            </button>
          <button onClick={next} className='border-none cursor-pointer w-[20%] h-[90%] hover:bg-gray-500 hover:rounded-xl hover:text-white flex items-center justify-center gap-2'>
            Next
            <IoArrowForwardOutline size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FlashCard
